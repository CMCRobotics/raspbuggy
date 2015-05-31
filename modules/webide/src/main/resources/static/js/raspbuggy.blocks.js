Blockly.Blocks['mov_move'] = {
  init: function() {
//  this.setHelpUrl('http://www.example.com/');
    this.setColour(20);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["Move Forward for", "FORWARD"], ["Move Backwards for", "BACKWARDS"]]), "direction")
        .appendField(new Blockly.FieldTextInput("500"), "duration")
        .appendField("milliseconds");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['mov_turn'] = {
  init: function() {
//    this.setHelpUrl('http://www.example.com/');
    this.setColour(20);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["Turn left", "LEFT"], ["Turn right", "RIGHT"]]), "direction")
        .appendField("by")
        .appendField(new Blockly.FieldAngle("90"), "degrees")
        .appendField("degrees");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['mov_rotate'] = {
  init: function() {
//    this.setHelpUrl('http://www.example.com/');
    this.setColour(20);
    this.appendDummyInput()
        .appendField("Rotate")
        .appendField(new Blockly.FieldDropdown([["left", "LEFT"], ["right", "RIGHT"], ["left and right", "BOTH"]]), "wheels")
        .appendField("wheels")
        .appendField(new Blockly.FieldDropdown([["very slowly", "SLOW"], ["slowly", "MEDIUM"], ["fast", "FAST"]]), "speed");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['vis_acquire'] = {
  init: function() {
 //   this.setHelpUrl('http://www.example.com/');
    this.setColour(330);
    this.appendDummyInput()
        .appendField("Take a picture of")
        .appendField(new Blockly.FieldDropdown([["320 x 240", "x320"], ["640 x 480", "x640"], ["1920x1080", "x1920"]]), "resolution")
        .appendField("pixels");
    this.setOutput(true, "vis_picture");
    this.setTooltip('');
  }
};

Blockly.Blocks['vis_shapes'] = {
  init: function() {
 //   this.setHelpUrl('http://www.example.com/');
    this.setColour(330);
    this.appendDummyInput()
        .appendField("Does");
    this.appendValueInput("picture_input")
        .setCheck("vis_picture")
        .appendField("this picture");
    this.appendDummyInput()
        .appendField("contain")
        .appendField(new Blockly.FieldDropdown([["a circle", "CIRCLE"], ["a square", "SQUARE"], ["a triangle", "TRIANGLE"]]), "shape")
        .appendField("?");
    this.setOutput(true, "Boolean");
    this.setTooltip('');
  }
};

Blockly.Blocks['vis_filter'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(330);
    this.appendDummyInput()
        .appendField("Apply colour filter")
        .appendField(new Blockly.FieldDropdown([["Black and white", "BLACK"], ["Red", "RED"], ["Green", "GREEN"], ["Blue", "BLUE"], ["Yellow", "YELLOW"]]), "filter");
    this.appendValueInput("NAME")
        .setCheck("vis_picture")
        .appendField("To this picture");
    this.setOutput(true, "vis_picture");
    this.setTooltip('');
  }
};

Blockly.Blocks['sen_obstacle_distance'] = {
  init: function() {
//    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendDummyInput()
        .appendField("Measure distance to the obstacle");
    this.setOutput(true, "Number");
    this.setTooltip('');
  }
};

Blockly.Blocks['sen_obstacle_presence'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendDummyInput()
        .appendField("Is there an obstacle")
        .appendField(new Blockly.FieldDropdown([["ahead", "AHEAD"], ["on the left", "LEFT"], ["on the right", "RIGHT"]]), "direction")
        .appendField("within")
        .appendField(new Blockly.FieldVariable("item"), "distance")
        .appendField("centimeters ?");
    this.setOutput(true, "Boolean");
    this.setTooltip('');
  }
};
