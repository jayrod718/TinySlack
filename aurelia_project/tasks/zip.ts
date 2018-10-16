import * as gulp from 'gulp';
import * as path from 'path';
import * as minimatch from 'minimatch';
import * as changedInPlace from 'gulp-changed-in-place';
import * as zip from 'gulp-zip';
import * as project from '../aurelia.json';

export default function zipFiles(done) {
    
  if (typeof project.zipFiles !== 'object') {
    done();
    return;
  }
  console.log(project.zipFiles);
    return gulp.src(project.zipFiles.sources,
            {base: './'})
            .pipe(zip(project.zipFiles.filename))
            .pipe(gulp.dest(project.zipFiles.targetfolder));

}
