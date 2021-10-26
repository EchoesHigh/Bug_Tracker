import bugModel from "../Models/bugModel"

export function retrieveBugs(){
    let data = [];
    
    data.push(new bugModel({
        _id: 123456,
        name: "Crash on load",
        details: "Crashes after 3 seconds",
        steps: "Open application and it will crash",
        version: "V2.0",
        priority: 1,
        assigned: "Adrián Miranda",
        creator: "Arturo Miranda",
        time: "15:49",
    }))
    data.push(new bugModel({
        _id: 654321,
        name: "Wont load",
        details: "Crashes after 3 seconds",
        steps: "Open application and it will crash",
        version: "V2.1",
        priority: 3,
        assigned: "Adrián Miranda",
        creator: "Arturo Miranda",
        time: "15:49",
    }))

    let sorted = data.sort((a, b) => {return a.priority - b.priority})
    return sorted;
}