#  ____   _ _ _  
# |    \ | | | |
# |  |  || | | |
# |____/ |_____|
# My zsh config.

### PATH
if [ -d "$HOME/.spicetify" ] ;
    then PATH="$PATH:/Users/dylanwax/.spicetify"
fi

if [ -d "$HOME/Developer/bin" ] ;
    then PATH="$PATH:$HOME/Developer/bin"
fi

if [ -d "/opt/homebrew/opt/fzf/bin" ] ;
    then PATH="$PATH:/opt/homebrew/opt/fzf/bin"
fi

if [ -d "/opt/local/bin" ] ;
    then PATH="$PATH:/opt/local/bin"
fi

if [ -d "$HOME/.cargo/bin" ] ;
    then PATH="$PATH:$HOME/.cargo/bin"
fi

if [ -d "/opt/homebrew/opt/openjdk/bin" ] ;
    then PATH="$PATH:/opt/homebrew/opt/openjdk/bin"
fi

### "bat" as manpager and "nvim" as editor
export MANPAGER="sh -c 'col -bx | bat -l man -p'"
export VISUAL='neovim'
export EDITOR='neovim'

export LESSHISTFILE=/dev/null

### ALIASES ###

# navigation
up () {
  local d=""
  local limit="$1"

  # Default to limit of 1
  if [ -z "$limit" ] || [ "$limit" -le 0 ]; then
    limit=1
  fi

  for ((i=1;i<=limit;i++)); do
    d="../$d"
  done

  # perform cd. Show error if cd fails
  if ! cd "$d"; then
    echo "Couldn't go up $limit dirs.";
  fi
}

# vim & emacs
alias vim="nvim"

# cleanup
alias cleanup="mac-cleanup"

# Changing "ls" to "exa"
alias ls='exa -Fal --color=always --group-directories-first'
alias la='exa -Fa --color=always --group-directories-first'
alias ll='exa -Fl --color=always --group-directories-first'
alias lt='exa -FaT --color=always --group-directories-first'
alias ld='exa -Fad --color=always */ .*/'
alias l.='exa -Fa --color=always | grep "^\."' 

# Changing "cd" to "z"
alias cd='z'

# Changing "cat" to "bat"
alias cat='bat -n'

# Confirm before overrides
alias cp="cp -i"
alias mv="mv -i"
alias rm="rm -i"

alias less='less -R'
alias more='more -R'

alias t='tmux attach || tmux new-session'
alias ta='tmux attach -t'
alias tn='tmux new-session'
alias tl='tmux list-sessions'

# ssh alias'
alias cushmc='ssh root@144.202.33.88'

# === PLUGINS ===

### Setup fzf
# ---------
if [[ ! "$PATH" == */opt/homebrew/opt/fzf/bin* ]]; then
  PATH="${PATH:+${PATH}:}/opt/homebrew/opt/fzf/bin"
fi

# Auto-completion
# ---------------
[[ $- == *i* ]] && source "/opt/homebrew/opt/fzf/shell/completion.zsh" 2> /dev/null

# Key bindings
source "/opt/homebrew/opt/fzf/shell/key-bindings.zsh"

### PLUGINS 
eval "$(zoxide init zsh)"
eval "$(starship init zsh)"

setopt auto_cd

source /opt/homebrew/share/zsh-autosuggestions/zsh-autosuggestions.zsh

export ZSH_HIGHLIGHT_HIGHLIGHTERS_DIR=/opt/homebrew/share/zsh-syntax-highlighting/highlighters
source /opt/homebrew/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
