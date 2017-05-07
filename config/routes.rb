Rails.application.routes.draw do
  root 'application#app'

  namespace :api, defaults: {format: :json} do

    resources :listings, only: [:index, :show] do
      collection do
        get 'featured'
      end
    end

  end

  match "*path" => "application#app", via: [:get]
end
