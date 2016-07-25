#  Driver library for Raspbuggy - Lego py-nxt implementation
'''
Created on Mar 18, 2015

@author: bcopy
'''

import nxt.locator
from nxt.motor import Motor,PORT_A,PORT_B,PORT_C
from nxt.sensor import Ultrasonic,Light,PORT_1,PORT_2,PORT_3,PORT_4

from drivar.Drivar import Drivar
import time

class DrivarNxt(Drivar):
    
    def __init__(self):
        self.m_initialized = False
        self.m_block = None
        self.m_leftMotor = None
        self.m_rightMotor = None
        self.m_penMotor = None
        self.m_ultrasonicSensor = None
        self.m_lightSensor = None
        self.m_moving = False

    def initialize(self):
        super(DrivarNxt,self).initialize()
        self.m_block = nxt.locator.find_one_brick()
        self.m_leftMotor = Motor(self.m_block, PORT_A)
        self.m_rightMotor = Motor(self.m_block, PORT_C)
        self.m_penMotor = Motor(self.m_block, PORT_B)
        self.m_ultrasonicSensor = Ultrasonic(self.m_block, PORT_4)
        self.m_lightSensor = Light(self.m_block, PORT_3)
        self.m_initialized = True
        

    def move(self, direction=Drivar.DIR_FORWARD,durationInMs=1000, callback = None):
        durationInMs = max(durationInMs,100)
        _direct = direction
        self.rotateWheels(direction = _direct)
        time.sleep(durationInMs/1000)
        self.stop()
        if callback is not None:
            callback()
    
    def rotateWheels(self, wheelSet = Drivar.WHEELS_BOTH, direction = Drivar.DIR_FORWARD, speedLevel = Drivar.SPEED_FAST, callback = None):
        power = self._getNxtSpeed(speedLevel)
        # Correct the power (positive vs negative) depending on the direction
        if(direction == Drivar.DIR_FORWARD):
            if(power < 0):
                power = power * -1
        if(direction == Drivar.DIR_BACKWARD):
            if(power > 0):
                power = power * -1
        # Get the wheels turning
        if(wheelSet == Drivar.WHEELS_LEFT or wheelSet == Drivar.WHEELS_BOTH):
            self.m_leftMotor.run(power)
        if(wheelSet == Drivar.WHEELS_RIGHT or wheelSet == Drivar.WHEELS_BOTH):
            self.m_rightMotor.run(power)
        self.m_moving = True
        if callback is not None:
            callback()
        
    def turn(self, direction = Drivar.DIR_LEFT, angle = 90, callback = None):
        left_power = -100
        right_power = 100
        if(direction == Drivar.DIR_RIGHT):
            left_power *= -1 
            right_power *= -1
        self.m_leftMotor.turn(left_power, angle)
        self.m_rightMotor.turn(right_power, angle)


    
    
    def stop(self, callback = None):
        self.m_leftMotor.idle()
        self.m_rightMotor.idle()
        self.m_moving = False
        if callback is not None:
            callback()
        
 
 
    '''
      Return the distance to the nearest obstacle, in centimeters
    '''
    def getDistanceToObstacle(self):
        return self.m_ultrasonicSensor.get_sample()
 
    '''
      Indicate with a boolean whether there is an obstacle within the given distance
    '''
    def isObstacleWithin(self, distance):
        dist = self.m_ultrasonicSensor.get_sample()
        if(dist <= distance):
            return True
        else:
            return False
    
    def rotatePen(self, angle):
        power = 70
        if angle < 0:
            angle = -1 * angle
            power = -70
        self.m_penMotor.turn(power, angle)

    def getReflectivityMeasurement(self):
        self.m_lightSensor.set_illuminated(True)
        return self.m_lightSensor.get_sample()
        
    def wait(self, milliseconds):
        time.sleep(milliseconds/1000)

    '''
      Return the NXT speed equivalent for the given DRIVAR speed flag
    '''
    @staticmethod
    def _getNxtSpeed(speed):
        if(speed==Drivar.SPEED_SLOW):
            return 70
        elif(speed==Drivar.SPEED_MEDIUM):
            return 100
        elif(speed==Drivar.SPEED_FAST):
            return 127
        else :
            return 100 

Drivar.register(DrivarNxt)

if __name__ == '__main__':
    _drivar = DrivarNxt()
