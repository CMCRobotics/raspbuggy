Blockly.Python['mov_move'] = function(block) {
  var value_direction = Blockly.Python.valueToCode(block, 'direction', Blockly.Python.ORDER_ATOMIC);
  var dropdown_direction = block.getFieldValue('direction');
  var value_duration = Blockly.Python.valueToCode(block, 'duration', Blockly.Python.ORDER_ATOMIC);
  var text_seconds = block.getFieldValue('seconds');
  // TODO: Assemble Python into code variable.
  var code = '# call the move function';
  return code;
};

Blockly.Python['mov_turn'] = function(block) {
  var dropdown_direction = block.getFieldValue('direction');
  var angle_degrees = block.getFieldValue('degrees');
  // TODO: Assemble JavaScript into code variable.
  var code = '# call the turn function';
  return code;
};

Blockly.Python['mov_rotate'] = function(block) {
  var dropdown_wheels = block.getFieldValue('wheels');
  var dropdown_speed = block.getFieldValue('speed');
  // TODO: Assemble Python into code variable.
  var code = '# call the rotate function';
  return code;
};

Blockly.Python['vis_acquire'] = function(block) {
  var dropdown_resolution = block.getFieldValue('resolution');
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['vis_shapes'] = function(block) {
  var value_picture_input = Blockly.Python.valueToCode(block, 'picture_input', Blockly.Python.ORDER_ATOMIC);
  var dropdown_shape = block.getFieldValue('shape');
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['vis_filter'] = function(block) {
  var value_picture_input = Blockly.Python.valueToCode(block, 'picture_input', Blockly.Python.ORDER_ATOMIC);
  var dropdown_filter = block.getFieldValue('filter');
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['sen_obstacle_distance'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['sen_obstacle_presence'] = function(block) {
  var dropdown_direction = block.getFieldValue('direction');
  var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('distance'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
