Only tested with yarn. Install yarn with `npm install --global yarn`

```bash
git clone https://github.com/cw-saff/cws.git
# or
gh repo clone cw-saff/cws

cd cws

# install dependencies
yarn

# link this folder to use cws command
yarn link

# run the course-snap command
cws course-snap ~/path/to/course.json --device "Device Name"

# Get list of possible devices
cws course-snap ~/path/to/course.json --list-devices

# You can apply multiple devices
cws course-snap ~/path/to/course.json --device "Desktop Chrome" --device "Pixel 5"
```
