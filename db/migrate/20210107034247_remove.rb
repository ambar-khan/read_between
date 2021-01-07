class Remove < ActiveRecord::Migration[6.0]
  def change
    remove_column :events, :isbn13, :integer
  end
end
