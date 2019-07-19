Rails.application.routes.draw do

  scope '/api' do
    get :sounds, to: 'sounds#index'
    # get ':soundkits/:id/soundfiles', to: 'soundkits#getsoundfiles'
    get :soundkits, to: 'soundkits#index'
    get :recordings, to: 'recordings#index'
    get ':soundkits/:id', to: 'soundkits#show'
    patch ':soundkits/:id', to: 'soundkits#update'
    post :soundkits, to: 'soundkits#create'
    delete :sounkits, to: 'soundkits#delete'
  end
end
