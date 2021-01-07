class ChangeBookIdToString < ActiveRecord::Migration[6.0]
  def change
    change_column :events, :book_id, :string
  end
end
