function isPerson(o) {
    return "name" in o && "walk" in o;
}
function isAnimal(o) {
    return "name" in o && "bark" in o;
}
function something(o) {
    //   if (isPerson(o)) o.walk();
    //   if (isAnimal(o)) o.bark();
    switch (o.type) {
        case "person":
            o.walk();
            break;
        case "animal":
            o.bark();
            break;
    }
}
