// use actix_web_static_files::resource_dir;
use actix_web_static_files::NpmBuild;

fn main() {
    NpmBuild::new("./frontend")
        .install().unwrap()
        .run("build").unwrap()
        .target("./frontend/build")
        .to_resource_dir()
        .build().unwrap();

    // resource_dir("./frontend/build").build().unwrap();
}
