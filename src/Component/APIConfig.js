const config = {
    "swagger": "2.0",
    "Info": {
        "description" : "API Document By Swagger. จัดทำหน้านี้เพื่อรวมข้อมูล API บนเว็บไซต์นี้",
        "title": "Swagger Numerical Method"
    },
    "host" : "",

    "path":{
        "/root_of_equation":{
            "get":{
                "tags":[
                    "API"
                ],
                "summary" : "ค้นหาโจทย์ทั้งหมดในเรื่อง Root of Equation",
                "responses" : {
                    "200": {
                        "description" : "ทำงานสำเร็จ"
                    },
                    "404":{
                        "description" : "ไม่พบโจทย์"
                    }
                }
            }
        }
    },
}