#!/bin/sh

STATUS=$(/usr/local/bin/mullvad status | awk '{print $1}')

case $STATUS in
    "Connected")
        /usr/local/bin/mullvad disconnect
        sketchybar --set $NAME icon="";;
    "Disconnected")
        /usr/local/bin/mullvad connect
        sketchybar --set $NAME icon="";;
esac

