class AccessoriesController < ApplicationController
  before_action :set_accessory, only: [:show, :update, :destroy]

  # GET /accessories
  def index
    @accessories = Accessory.all

    render json: @accessories
  end

  # GET /accessories/1
  def show
    @accessories = Accessory.find(:id)
    render json: @accessory
  end

  # POST /accessories
  def create
    @accessory = Accessory.new(accessory_params)

    if @accessory.save
      render json: @accessory, status: :created, location: @accessory
    else
      render json: @accessory.errors, status: :unprocessable_entity
    end
  end

  # Create by /users/:user_id/sneakers
  def create_accessory_by_user
    user = User.find(params[:user_id])
    accessory = user.accessories.new(accessory_params)
    if accessory.save
      render json: accessory, include: :user, status: :created
    else
      render json: accessory.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /accessories/1
  def update
    if @accessory.update(accessory_params)
      render json: @accessory
    else
      render json: @accessory.errors, status: :unprocessable_entity
    end
  end

  # DELETE /accessories/1
  def destroy
    @accessory.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_accessory
      @accessory = Accessory.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def accessory_params
      params.require(:accessory).permit(:name, :description, :image, :price, :id, :user_id)
    end
end
