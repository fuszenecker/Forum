use std::collections::HashMap;
use std::env;
use http::StatusCode;
use actix_web::{web, App, HttpRequest, HttpServer, Responder, HttpResponse, http};

use actix_web::middleware::Logger;

include!(concat!(env!("OUT_DIR"), "/generated.rs"));

async fn greet(req: HttpRequest) -> impl Responder {
    let name = req.match_info().get("name").unwrap_or("World");
    format!("Hello {}!", &name)
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    let port = env::var("PORT")
        .unwrap_or_else(|_| "3001".to_string())
        .parse()
        .expect("PORT must be a number");

    std::env::set_var("RUST_LOG", "actix_web=info");
    env_logger::init();

    HttpServer::new(|| {
        let generated = generate();
        App::new()
            // Setup logging:
            .wrap(Logger::default())

            // Redirection
            .route("/", web::get().to(|| { HttpResponse::build(StatusCode::PERMANENT_REDIRECT)
                .set_header(http::header::LOCATION, "/ui").finish() } ))

            // Static SPA content:
            .service(actix_web_static_files::ResourceFiles::new(
                "/ui", generated,
            ))

            // API:
            .route("/api/{name}", web::get().to(greet))
        })
    .bind(("0.0.0.0", port))?
    .run()
    .await
}

#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        assert_eq!(2 + 2, 4);
    }
}