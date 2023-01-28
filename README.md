# lockScreenPhotos

When you log on to Windows the lock screen displays often nice images that are not easily found. When you do find them, they are also in a format that can't be easily viewed.
This is a simple nodejs script that copies hidden files that appear on Windows locks screen into a directory so that they can be easily accessed.

## Instructions

To run this script requires NodeJS. Clone the repository:

```bash
git clone https://github.com/hanley2d/lockScreenPhotos.git
npm install
```

Create a .env file in the directory and set the environment variables for the source directory of the images and the destination directory. Alternatively, just edit the source and destination paths directly in the .js file. The source directory will be something like this

```
Local Disk (C:) > Users > [YOUR USERNAME] > AppData > Local >  Packages > Microsoft.Windows.ContentDeliveryManager_cw5n1h2txyewy > LocalState > Assets
```

Run the script

```bash
node lockScreenPhotos.js
```
