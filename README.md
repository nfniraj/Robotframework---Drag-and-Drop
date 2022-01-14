# Robotframework---Drag-and-Drop
Drag and Drop javascript code for robotframework

----------------------------------------------------------------------------

DragAndDrop.js simulates the browser action of drag and drop.
It expects the source and target identifier as XPath.

----
**How to use it**

1. Copy the DragAndDrop.js in a directory in the framework
2. Import the DragAndDrop.js in the test case using _Resource_ command
3. Use the following steps and set your source and target destination

    ```${source}=  Set Variable  '<XPath of source element>'
    ${source}=  Replace String      ${source}    "   \" 
    ${target}=  Set Variable    '<XPath of target element>'
    ${target}=   Replace String      ${target}        "  \"
  
    ${js}        Get File              DragAndDrop.js
    ${result}    Execute Javascript    ${js}; return DragNDrop(${source}, ${target});```

----


This Javascript code is rather generic and should work in other implementations as well (Note: Tested only on Robotframework)
