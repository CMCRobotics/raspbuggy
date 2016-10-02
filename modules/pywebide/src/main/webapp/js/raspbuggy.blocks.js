Blockly.Blocks['mov_move'] = {
  init: function() {
    this.setColour(20);
    this.appendDummyInput()
        .appendField("Move")
        .appendField(new Blockly.FieldDropdown([["Forward", "FORWARD"], ["Backwards", "BACKWARD"], ["Portside", "PORTSIDE"], ["Starboard", "STARBOARD"]]), "direction")
        .appendField("for")
        .appendField(new Blockly.FieldTextInput("500"), "duration")
        .appendField("milliseconds.");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['mov_turn'] = {
  init: function() {
    this.setColour(20);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["Turn left", "LEFT"], ["Turn right", "RIGHT"]]), "direction")
        .appendField("by")
        .appendField(new Blockly.FieldAngle("90"), "degrees")
        .appendField("degrees.");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

/*
Blockly.Blocks['mov_rotate'] = {
  init: function() {
    this.setColour(20);
    this.appendDummyInput()
        .appendField("Rotate")
        .appendField(new Blockly.FieldDropdown([["the left", "LEFT"], ["the right", "RIGHT"], ["left and right", "BOTH"]]), "wheels")
        .appendField("wheels")
        .appendField(new Blockly.FieldDropdown([["forward", "FORWARD"], ["backwards", "BACKWARD"]]), "direction")
        .appendField(new Blockly.FieldDropdown([["very slowly", "SLOW"], ["slowly", "MEDIUM"], ["fast", "FAST"]]), "speed");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};
*/
Blockly.Blocks['mov_stop'] = {
  init: function() {
    this.setColour(20);
    this.appendDummyInput()
        .appendField("Stop the wheels.");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

/*
Blockly.Blocks['vis_acquire'] = {
  init: function() {
    this.setColour(330);
    this.appendDummyInput()
        .appendField("Take a picture of")
        .appendField(new Blockly.FieldDropdown([["320 x 240", "x320"], ["640 x 480", "x640"], ["1920x1080", "x1920"]]), "resolution")
        .appendField("pixels.");
    this.setOutput(true, "vis_picture");
    this.setTooltip('');
  }
};

Blockly.Blocks['vis_shapes'] = {
  init: function() {
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
    this.setColour(330);
    this.appendDummyInput()
        .appendField("Apply colour filter")
        .appendField(new Blockly.FieldDropdown([["Black and white", "BLACK"], ["Red", "RED"], ["Green", "GREEN"], ["Blue", "BLUE"], ["Yellow", "YELLOW"]]), "filter");
    this.appendValueInput("NAME")
        .setCheck("vis_picture")
        .appendField("To this picture.");
    this.setOutput(true, "vis_picture");
    this.setTooltip('');
  }
};
*/

Blockly.Blocks['sen_obstacle_distance'] = {
  init: function() {
    this.setColour(120);
    this.appendDummyInput()
        .appendField("Measure distance to the obstacle.");
    this.setOutput(true, "Number");
    this.setTooltip('');
  }
};

Blockly.Blocks['sen_obstacle_presence'] = {
  init: function() {
    this.setColour(120);
    this.appendDummyInput()
        .appendField("There is an obstacle within")
     //   .appendField(new Blockly.FieldDropdown([["ahead", "AHEAD"], ["on the left", "LEFT"], ["on the right", "RIGHT"]]), "direction")
        .appendField(new Blockly.FieldTextInput("20"), "distanceCm")
        .appendField("centimeters.");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setTooltip('');
  }
};

Blockly.Blocks['sen_get_reflectivity_measurement'] = {
  init: function() {
    this.setColour(120);
    this.appendDummyInput()
        .appendField("Get reflectivity measurement.");
    this.setOutput(true, "Number");
    this.setTooltip('');
  }
};

Blockly.Blocks['time_wait'] = {
  init: function() {
    this.setColour(240);
    this.appendDummyInput()
        .appendField("Wait for")
        .appendField(new Blockly.FieldTextInput("500"), "waitInMs")
        .appendField("milliseconds");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

//Blockly.Blocks['pen_rotate'] = {
//  init: function() {
//    this.setColour(60);
//    this.appendDummyInput()
//        .appendField("Rotate the pen by ")
//        .appendField(new Blockly.FieldDropdown([["-90", "-90"], ["-45", "-45"], ["-15", "-15"], ["+15", "15"], ["+45", "45"], ["+90", "90"]]), "degrees")
//        .appendField(" degrees.");
//    this.setPreviousStatement(true);
//    this.setNextStatement(true);
//    this.setTooltip('');
//  }
//};

