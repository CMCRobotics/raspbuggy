import unittest
from DrivarNxt import DrivarNxt


class TestDrivarNxt(unittest.TestCase):
    
    def test_move(self):
        drivar = DrivarNxt()
        drivar.initialize()
        drivar.move()
        drivar.turn()


if __name__ == '__main__':
    unittest.main()
