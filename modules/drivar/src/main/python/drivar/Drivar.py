#  Driver library for Raspbuggy
'''
Created on Mar 18, 2015

@author: bcopy
'''
from abc import ABCMeta,abstractmethod
import time



class Drivar(object):
    __metaclass__ = ABCMeta

    DIR_FORWARD = 0x01
    DIR_BACKWARD = 0x02
    
    DIR_LEFT = 0x04
    DIR_RIGHT = 0x08
    
    WHEELS_RIGHT = 0x01
    WHEELS_LEFT = 0x02
    WHEELS_BOTH = 0x04
    
    SPEED_SLOW = 0x01
    SPEED_MEDIUM = 0x02
    SPEED_FAST = 0x04
    
    PEN_RAISE = 0x01
    PEN_LOWER = 0x02
    
    @abstractmethod
    def initialize(self):
        pass

    @abstractmethod
    def move(self, direction = DIR_FORWARD,durationInMs=1000, callback = None):
        pass
    
    @abstractmethod
    def rotateWheels(self, wheelSet = WHEELS_BOTH, direction = DIR_FORWARD, speedLevel = SPEED_FAST, callback = None):
        pass
    
    @abstractmethod
    def turn(self, direction = DIR_LEFT, angle = 90, callback = None):
        pass

    @abstractmethod
    def stop(self, callback = None):
        pass
 
    '''
      Return the distance to the nearest obstacle, in centimeters
    '''
    @abstractmethod
    def getDistanceToObstacle(self):
        pass
 
    '''
      Indicate with a boolean whether there is an obstacle within the given distance
    '''
    @abstractmethod
    def isObstacleWithin(self, distance):
        pass
        
    def wait(self, duration = 1000):
        time.sleep(duration)
        
    '''
      Orders the pen to be raised or lowered
    '''
    @abstractmethod
    def rotatePen(self, angle):
        pass

    @abstractmethod
    def getReflectivityMeasurement(self):
        pass

    @abstractmethod
    def wait(self, milliseconds):
        pass


