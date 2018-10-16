import * as gulp from "gulp";
import * as replace from "gulp-replace";

export default function fixMDBFolders() {
    return gulp.src(["scripts/vendor-bundle.js"])
        .pipe(replace("\"../scripts/app-bundle\"", "MDB.baseUrl + \"/scripts/app-bundle\"" ))
        .pipe(gulp.dest("scripts/"));
}