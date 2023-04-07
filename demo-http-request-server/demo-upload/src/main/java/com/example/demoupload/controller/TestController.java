package com.example.demoupload.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;

@RestController
public class TestController {
    @GetMapping("/test")
    public String getTest() {
        return "Hello SpringBoot!!!";
    }

    @PostMapping("/upload")
    public String upload(@RequestParam("imgFile") MultipartFile file,
                         @RequestParam("imgName") String name) throws Exception {


        name = name + System.currentTimeMillis();
        File dir = new File("uploadFile");
        if (!dir.exists()) {
            dir.mkdirs();
        }
        file.transferTo(new File(dir.getAbsolutePath() + File.separator + name + ".png"));

        return "you upload something" + name;
    }
}
