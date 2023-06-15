#!/bin/sh

STATUS=$(/usr/local/bin/mullvad status | awk '{print $1}')

case $STATUS in
    "Connected")
        sketchybar --set $NAME icon="";;
    "Disconnected")
        sketchybar --set $NAME icon="";;
esac

