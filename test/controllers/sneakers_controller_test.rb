require 'test_helper'

class SneakersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @sneaker = sneakers(:one)
  end

  test "should get index" do
    get sneakers_url, as: :json
    assert_response :success
  end

  test "should create sneaker" do
    assert_difference('Sneaker.count') do
      post sneakers_url, params: { sneaker: { brand: @sneaker.brand, description: @sneaker.description, image: @sneaker.image, name: @sneaker.name, price: @sneaker.price, user_id: @sneaker.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show sneaker" do
    get sneaker_url(@sneaker), as: :json
    assert_response :success
  end

  test "should update sneaker" do
    patch sneaker_url(@sneaker), params: { sneaker: { brand: @sneaker.brand, description: @sneaker.description, image: @sneaker.image, name: @sneaker.name, price: @sneaker.price, user_id: @sneaker.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy sneaker" do
    assert_difference('Sneaker.count', -1) do
      delete sneaker_url(@sneaker), as: :json
    end

    assert_response 204
  end
end
