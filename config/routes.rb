Rails.application.routes.draw do
  root 'application#app'

  get 'app', to: "application#app"
end
