
export class HttpClient {
    getData() : JQueryXHR {
        return $.ajax({
            method: "GET",
            url: "https://localhost:5001/api/user"
        })
    }
}