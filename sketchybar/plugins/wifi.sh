#!/bin/sh

WIFI=$(/System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport -I \
| rg -w "SSID" | sed "s/SSID://" | sed "s/ //g" | cut -c1-11)


sketchybar --set $NAME icon=" " label="$WIFI"
