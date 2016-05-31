Template.RecipeDetails.onCreated(function(){ 
	var self = this;
	self.autorun(function(){
		self.subscribe('recipes');
	});
});

Template.RecipeDetails.helpers({
	recipe: ()=> {
		var id = FlowRouter.getParam('id');
		return Recipes.findOne({
			_id : id
		});
	}
});