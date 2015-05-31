Blockly.Python['mov_move'] = function(block) {
  var dropdown_direction = block.getFieldValue('direction');
  var text_seconds = block.getFieldValue('duration');
  var code = 'drivar.move(direction=Drivar.DIR_'+dropdown_direction+',durationInMs=int('+text_seconds+'))\n';
  return code;
};

Blockly.Python['mov_turn'] = function(block) {
  var dropdown_direction = block.getFieldValue('direction');
  var angle_degrees = block.getFieldValue('degrees');
  var code = 'drivar.turn(direction=Drivar.DIR_'+dropdown_direction+',angle=int('+angle_degrees+'))\n';
  return code;
};

Blockly.Python['mov_rotate'] = function(block) {
  var dropdown_wheels = block.getFieldValue('wheels');
  var dropdown_direction = block.getFieldValue('direction');
  var dropdown_speed = block.getFieldValue('speed');
  var code = 'drivar.rotateWheels(wheelSet=Drivar.WHEELS_'+dropdown_wheels+',direction=Drivar.DIR_'+dropdown_direction+',speedLevel=Drivar.SPEED_'+dropdown_speed+')\n';
  return code;
};

Blockly.Python['mov_stop'] = function(block) {
  var code = 'drivar.stop()\n';
  return code;
};

//Blockly.Python['vis_acquire'] = function(block) {
//  var dropdown_resolution = block.getFieldValue('resolution');
//  var code = 'drivar.takePicture(Drivar.PIC_RESOLUTION_'+dropdown_resolution+')';
//  return [code, Blockly.Python.ORDER_NONE];
//};
//
//Blockly.Python['vis_shapes'] = function(block) {
//  var value_picture_input = Blockly.Python.valueToCode(block, 'picture_input', Blockly.Python.ORDER_ATOMIC);
//  var dropdown_shape = block.getFieldValue('shape');
//  var code = '# Call Vision shape comparison function';
//  return [code, Blockly.Python.ORDER_NONE];
//};
//
//
//Blockly.Python['vis_filter'] = function(block) {
//  var value_picture_input = Blockly.Python.valueToCode(block, 'picture_input', Blockly.Python.ORDER_ATOMIC);
//  var dropdown_filter = block.getFieldValue('filter');
//  var code = '# Call Vision filter function\n';
//  return [code, Blockly.Python.ORDER_NONE];
//};

Blockly.Python['sen_obstacle_distance'] = function(block) {
  var code = 'drivar.getDistanceToObstacle()';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['sen_get_reflectivity_measurement'] = function(block) {
  var code = 'drivar.getReflectivityMeasurement()';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['sen_obstacle_presence'] = function(block) {
  //var dropdown_direction = block.getFieldValue('direction');
  var text_distancecm = block.getFieldValue('distanceCm');
  var code = 'drivar.isObstacleWithin(int('+text_distancecm+'))';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['time_wait'] = function(block) {
  var text_waitinms = block.getFieldValue('waitInMs');
  var code = 'drivar.wait('+(text_waitinms/1000)+')\n';
  return code;
};

Blockly.Python['pen_rotate'] = function(block) {
  var angle_degrees = block.getFieldValue('degrees');
  var code = 'drivar.rotatePen(angle=int(\''+angle_degrees+'\'))\n';
  return code;
};


