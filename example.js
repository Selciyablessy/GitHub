function addItemAfter() {
    // Get the list
    var itemList = document.getElementById("itemList");

    // Create a new list item
    var newItem = document.createElement("li");
    newItem.textContent = "New Item"; // You can customize the content here

    // Insert the new item after the second item (index 1)
    itemList.insertBefore(newItem, itemList.children[1].nextSibling);
}
