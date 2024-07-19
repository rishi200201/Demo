const csv = require("csv-parser");
const fs = require("fs");
const userModel = require("../Models/user");
const path = require('path')
exports.bulkRegister = async (req, res, next) => {
    if (!req.files || !req.files.file) {
        return res.status(400).json({ message: 'No file uploaded' });
      }
    
      const file = req.files.file;
      const filePath = path.join(__dirname, '..', 'uploads', file.name);
      
      // Move the uploaded file to the uploads directory
      file.mv(filePath, (err) => {
        if (err) {
          return res.status(500).json({ message: 'Error moving file', error: err });
        }
    
        const users = [];
        const failedUsers = [];
        const successfulUsers = [];
    
        fs.createReadStream(filePath)
          .pipe(csv())
          .on('data', (row) => {
            users.push(row);
          })
          .on('end', async () => {
            for (const userData of users) {
              try {
                const user = new userModel(userData);
                await user.validate(); // Validate without saving
                successfulUsers.push(userData); // Add to successfulUsers if validation passes
              } catch (err) {
                failedUsers.push({ userData, error: err.message }); // Add to failedUsers if validation fails
              }
            }
    
            if (successfulUsers.length > 0) {
              try {
                await userModel.insertMany(successfulUsers); // Insert only valid users
              } catch (err) {
                return res.status(500).json({ message: 'Error inserting users', error: err });
              }
            }
    
            // Remove the uploaded file after processing
            fs.unlink(filePath, (err) => {
              if (err) {
                console.log('Error removing file:', err);
              }
            });
    
            res.status(200).json({
              message: 'Bulk registration completed',
              successfulUsers: successfulUsers.length,
              failedUsers
            });
          });
      });
};
