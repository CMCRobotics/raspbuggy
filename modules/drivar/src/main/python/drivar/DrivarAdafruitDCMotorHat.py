#  Driver library for Raspbuggy - Adafruit DC Motor Hat (i2c implementation)
'''
Created on Apr 24, 2016

@author: bcopy
'''

from drivar.Drivar import Drivar
from Adafruit_MotorHAT import Adafruit_MotorHAT, Adafruit_DCMotor

import atexit
import time

class DrivarAdafruitDCMotorHat(Drivar):
    
    def __init__(self):
        self.m_initialized = False
        self.mh = Adafruit_MotorHAT(addr=0x60)

        self.m_frontLeftMotor = None
        self.m_frontRightMotor = None
        self.m_backLeftMotor = None
        self.m_backRightMotor = None
        self.m_moving = False

    def initialize(self):
        super(DrivarNxt,self).initialize()
        self.m_frontLeftMotor = mh.getMotor(1)
        self.m_backLeftMotor = mh.getMotor(2)
        self.m_frontRightMotor = mh.getMotor(3)
        self.m_backRightMotor = mh.getMotor(4)
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
        power = self._getDCMotorHatSpeed(speedLevel)
        # TODO : Complete implementation
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
        # TODO : Complete implementation
        self.m_frontRightMotor.turn(left_power, angle)
        self.m_rightMotor.turn(right_power, angle)


    
    
    def stop(self, callback = None):
        self.m_frontLeftMotor.run(Adafruit_MotorHAT.RELEASE)
	self.m_backLeftMotor.run(Adafruit_MotorHAT.RELEASE)
	self.m_frontLeftMotor.run(Adafruit_MotorHAT.RELEASE)
	self.m_backRightMotor.run(Adafruit_MotorHAT.RELEASE)
	self.m_moving = False
        if callback is not None:
            callback()
        
 
 
    '''
      Return the distance to the nearest obstacle, in centimeters
    '''
    def getDistanceToObstacle(self):
        # TODO : Add ultrasonic sensor support
        return 200
 
    '''
      Indicate with a boolean whether there is an obstacle within the given distance
    '''
    def isObstacleWithin(self, distance):
        # TODO : Add ultrasonic sensor support
        return False
    
    def rotatePen(self, angle):
        pass

    def getReflectivityMeasurement(self):
        return 0
        
    def wait(self, milliseconds):
        time.sleep(milliseconds/1000)

    '''
      Return the Adafruit Motor HAT speed equivalent for the given DRIVAR speed flag
    '''
    @staticmethod
    def _getDCMotorHatSpeed(speed):
        if(speed==Drivar.SPEED_SLOW):
            return 150
        elif(speed==Drivar.SPEED_MEDIUM):
            return 200
        elif(speed==Drivar.SPEED_FAST):
            return 255
        else :
            return 150 

Drivar.register(DrivarAdafruitDCMotorHat)

if __name__ == '__main__':
    _drivar = DrivarAdafruitDCMotorHat()
