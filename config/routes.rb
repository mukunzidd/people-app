Rails.application.routes.draw do
  get 'people/index'
  root 'people#index'
end
