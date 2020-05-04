// Map ----------------------------------------------
// Map creates a new array by transforming every element in an array, individually
var tasks = [
    {
      'name'     : 'Write for Envato Tuts+',
      'duration' : 120
    },
    {
      'name'     : 'Work out',
      'duration' : 60
    },
    {
      'name'     : 'Procrastinate on Duolingo',
      'duration' : 240
    } 
  ];
// I include the index and  array parameters to remind you that they're there if you need them. 
// Since I didn't use them here, though, you could leave them out, and the code would run just fine.
  var task_names1 = tasks.map(function (task, index, array) {
    return task.name; 
});
// or using arrow function
var task_names2 = tasks.map((task) => task.name );

// Filter ----------------------------------------------
// Filter creates a new array by removing elements that don't belong
var difficult_tasks1 = tasks.filter(function (task, index, array) {
    return task.duration >= 120;
});
 
// Using ES6 using arrow function
var difficult_tasks2 = tasks.filter((task) => task.duration >= 120 );

// Reduce ----------------------------------------------
// Reduce takes all of the elements in an array, and reduces them into a single value
// also takes an optional second argument: the value to start combining all your array elements into
//array.filter(currentVal, previousVal, currentIndex, array)

//sum
var total = [1, 2, 3, 4, 5].reduce(function (previous, current) {
    return previous + current;
}, 0);


                  // Concatenate our 2D array into a single list
                  var result = tasks.reduce((acc, current) => acc.concat(current))
                  // Extract the task duration, and convert minutes to hours
                  .map((task) => task.duration / 60)
                  // Filter out any task that took less than two hours
                  .filter((duration) => duration >= 2)
                  // Multiply each tasks' duration by our hourly rate
                  .map((duration) => duration * 25)
                  // Combine the sums into a single dollar amount
                  .reduce((acc, current) => [(+acc) + (+current)]) // had to put into an array so can use map after
                  // Convert to a "pretty-printed" dollar amount
                  .map((amount) => '$' + amount.toFixed(2))
                  // Pull out the only element of the array we got from map
                  .reduce((formatted_amount) =>formatted_amount);