package net.malanius.todo.data;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;

@Data
@AllArgsConstructor
public class Todo {

    private long id;
    private String username;
    private String description;
    private Date deadline;
    private boolean completed;

}
