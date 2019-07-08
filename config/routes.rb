Rails.application.routes.draw do

  scope '/api' do
    get :sounds, to: 'sounds#index'
    get :soundkits, to: 'soundkits#index'
    get :recordings, to: 'recordings#index'
    get ':soundkits/:id', to: 'soundkits#show'
  end
end
