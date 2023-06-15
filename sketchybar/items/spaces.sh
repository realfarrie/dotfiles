#!/usr/bin/env sh

sketchybar --add   space          space_template left                \
           --set   space_template icon.color=0xff76add0              \
                                  label.drawing=off                  \
                                  drawing=off                        \
                                  updates=on                         \
                                  associated_display=1               \
                                  label.font="$FONT:Black:10.0"      \
                                  icon.font="$FONT:Bold:11.0"        \
                                  icon.padding_right=6               \
                                  icon.padding_left=2                \
                                  icon.y_offset=2                    \
                                  background.padding_left=0          \
                                  background.padding_right=1         \
                                  icon.background.height=2           \
                                  icon.background.color=$ICON_COLOR  \
                                  icon.background.color=$ICON_COLOR  \
                                  icon.background.y_offset=-13       \
                                  click_script="$SPACE_CLICK_SCRIPT" \
                                  ignore_association=on              \
                                                                     \
           --clone spaces_1.label label_template                     \
                                  associated_display=1               \
                                  label.width=45                     \
                                  label.align=center                 \
                                  position=left                      \
                                  drawing=on                         \
                                                                     \
           --clone spaces_1.dev   space_template                     \
           --set   spaces_1.dev   associated_space=1                 \
                                  icon=" dev"                        \
                                  icon.highlight_color=0xffab79a7    \
                                  icon.background.color=0xffab79a7   \
                                  drawing=on                         \
                                  script="$PLUGIN_DIR/space.sh"      \
                                                                     \
           --clone spaces_1.www   space_template                     \
           --set   spaces_1.www   associated_space=2                 \
                                  icon=" www"                        \
                                  icon.highlight_color=0xffab79a7    \
                                  icon.background.color=0xffab79a7   \
                                  drawing=on                         \
                                  script="$PLUGIN_DIR/space.sh"      \
                                                                     \
           --clone spaces_1.sys   space_template                     \
           --set   spaces_1.sys   associated_space=3                 \
                                  icon=" sys"                        \
                                  icon.highlight_color=0xffab79a7    \
                                  icon.background.color=0xffab79a7   \
                                  drawing=on                         \
                                  script="$PLUGIN_DIR/space.sh"      \
                                                                     \
           --clone spaces_1.doc  space_template                      \
           --set   spaces_1.doc  associated_space=4                  \
                                  icon=" doc"                        \
                                  icon.highlight_color=0xffab79a7    \
                                  icon.background.color=0xffab79a7   \
                                  drawing=on                         \
                                  script="$PLUGIN_DIR/space.sh"      \
                                                                     \
           --clone spaces_1.skl   space_template                     \
           --set   spaces_1.skl   associated_space=5                 \
                                  icon=" skl"                        \
                                  icon.highlight_color=0xffab79a7    \
                                  icon.background.color=0xffab79a7   \
                                  drawing=on                         \
                                  script="$PLUGIN_DIR/space.sh"      \
                                                                     \
           --clone spaces_1.etc   space_template                     \
           --set   spaces_1.etc   associated_space=6                 \
                                  icon=" etc"                        \
                                  icon.highlight_color=0xffab79a7    \
                                  icon.background.color=0xffab79a7   \
                                  drawing=on                         \
                                  script="$PLUGIN_DIR/space.sh"      \
                                                                     \
           --clone spaces_1.mus   space_template                     \
           --set   spaces_1.mus   associated_space=7                 \
                                  icon=" mus"                        \
                                  icon.highlight_color=0xffab79a7    \
                                  icon.background.color=0xffab79a7   \
                                  drawing=on                         \
                                  script="$PLUGIN_DIR/space.sh"      \

 
																																		\
           --add   bracket        spaces_1         \
                                  spaces_1.dev     \
                                  spaces_1.www     \
                                  spaces_1.sys     \
                                  spaces_1.doc     \
                                  spaces_1.skl     \
                                  spaces_1.mus     \
                                 
