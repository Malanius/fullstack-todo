package net.malanius.todo.data;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.Date;

@Data
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Todo {

    private long id;
    private String username;
    private String description;
    private Date deadline;
    private boolean completed;

}
