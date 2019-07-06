Rails.application.routes.draw do
  # resources :soundkits
  # resources :recordings
  # resources :users
  scope '/api' do
    get :soundkits, to: 'soundkits#index'
    get :recordings, to: 'recordings#index'
  end
end
