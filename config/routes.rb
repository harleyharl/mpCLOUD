Rails.application.routes.draw do

  #TODO do i need to delete the scope here? heroku

  scope '/api' do
    get :sounds, to: 'sounds#index'
    # get ':soundkits/:id/soundfiles', to: 'soundkits#getsoundfiles'
    get :soundkits, to: 'soundkits#index'
    get :recordings, to: 'recordings#index'
    get ':soundkits/:id', to: 'soundkits#show'
    patch ':soundkits/:id', to: 'soundkits#update'
    post :soundkits, to: 'soundkits#create'
    delete ':soundkits/:id', to: 'soundkits#destroy'
  end

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
