window.addEvent('domready', function() {
horsesDemo = new Horses('horsesdemo', {paneWidth: 3});
horsesDemo.jumpTo(3);

$$('.rightbtn').addEvent('click', function(){horsesDemo.nextPane();} );
$$('.leftbtn').addEvent('click', function(){horsesDemo.previousPane();} );
});
