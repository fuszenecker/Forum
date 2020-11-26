use actix_web::{web, App, HttpRequest, HttpServer, Responder, HttpResponse, http};
use std::collections::HashMap;
use http::StatusCode;

include!(concat!(env!("OUT_DIR"), "/generated.rs"));

async fn greet(req: HttpRequest) -> impl Responder {
    let name = req.match_info().get("name").unwrap_or("World");
    format!("Hello {}!", &name)
}

/// Valami.
///
/// ```
/// let z = 100
/// ```
#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        let generated = generate();
        App::new()
            .service(actix_web_static_files::ResourceFiles::new(
                "/ui", generated,
            ))
            .route("/api/{name}", web::get().to(greet))
            .route("/", web::get().to(|| { HttpResponse::build(StatusCode::PERMANENT_REDIRECT)
                .set_header(http::header::LOCATION, "/ui").finish() } ))
            })
    .bind("127.0.0.1:8080")?
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