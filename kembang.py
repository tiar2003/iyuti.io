import turtle

turtle.bgcolor('black')
turtle.speed(10)
turtle.hideturtle()

colors = {"red","white","blue","white"}

for i in range(120):
    for c in colors:
        turtle.color(c)
        turtle.circle(170-1, 100)
        turtle.left(90)
        turtle.circle(170-1, 100)
        turtle.right(60)