console.log('to do list magic');

//I first looked at the CSS provided and compared it with the HTML to make sure I know all the tags, classes and ID's available for selection, etc.
///Part 1

//make empty array to store input values
const list = [];

const pageRender =  () => {
  const $newListItem = $('<div>' + list[list.length - 1] + '</div>').addClass('to-do-item');//create new list item and assign to variable, assign to-do-item class
  const $button = $('<button>').text('completed'); // create button variable and use the word "completed" for on click later in code
  $($newListItem).append($button);
  $('#to-do-list').append($newListItem);

}

//Part 2 & 3
//push new to do items into "Things to do column"
$(() => {

  $('#submit').on('click', (event) => {
    list.push($('#input-box').val());
    pageRender();
  })

  //Part 4 - Move elements from Things to Do column to "Things that are done"
  $('#to-do-list').on('click', (event) => {
    $(event.target).parent().addClass('done-item').removeClass('to-do-item');
    $(event.target).text('REMOVE');
    $(event.target).parent().appendTo('#completed');

  })
  //Part 5 - Delete selected to do item from the Things that are done column completely from the DOM
  $('#completed').on('click', (event) => {
    $(event.target).parent().remove();
  })


});
