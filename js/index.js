/*
    - Select color input
    - Select size input
    - When size is submitted by the user, call makeGrid()
*/
function makeGrid() {
      //Get the value of height, width and table
      const height = $("#input_height").val();
      const width = $("#input_width").val();
      const table = $("#pixel_canvas");
    
      //to create new table, we must delete the prev
      table.children().remove();
 
      //to create rows and columns
      for (let i=0; i<height ;++i) 
      {
          table.append("<tr></tr>");
 
          for (let j=0; j<width ;++j) 
          {
              table.children().last().append("<td></td>");
          }
      }
      
      //make event listener when we click on any cell, color it
      table.on("click","td",function() {
          const color=$("input[type='color']").val();
          $(this).attr("bgcolor",color);
        });
}
  
//make event listener to call the table makeGrid() when we submit tables size
$("input[type='submit']").click(function(ev) {
    ev.preventDefault(); 
    makeGrid();
});
  