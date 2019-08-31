package net.malanius.todo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/hello-world")
    public String hello() {
        return "Hello world!";
    }

    @GetMapping("/hello-wold-bean")
    public HelloWorldBean helloBean(){
        return new HelloWorldBean("Hello World!");
    }

    @GetMapping("/hello-wold-param/{name}")
    public HelloWorldBean helloParam(@PathVariable String name){
        return new HelloWorldBean("Hello " + name + "!");
    }
}
