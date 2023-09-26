--[[
    GD50 2023
    Pong Remake

    Pong-0
    "The Day-0 Update"
    -- main progam --

    Author: silvia
    silfimlg@gmail.com

    cara memainkan game pong yaitu dimainkan dengan 2 orang, pemain 1 mengarahkan papan dengan tanda panah atas dan bawah, 
    pemain 2 mengarahkan dengan huruf 'W' dan 'S'. Bola akan memantul ke kanan dan ke kiri ketika memantul ke papan pemain
    jika bola pemain 1 tidak mengenai papan maka pemain 2 akan mendapat score 1.


]]

WINDOW_WIDTH = 1280
WINDOW_HEIGHT = 720
--[[
    the game runs when it first stars,only once: used to intialize the game.
]]
function love.load()
    love.window.setMode(WINDOW_WIDTH, WINDOW_HEIGHT, {
        fullscreen= false,
        resizable= false,
        vsync= true
    })
end

function love.draw()
    love.graphics.printf(
        'Hello pong!',
        0,
        WINDOW_HEIGHT / 2-6,
        WINDOW_WIDTH,
        'left')
end