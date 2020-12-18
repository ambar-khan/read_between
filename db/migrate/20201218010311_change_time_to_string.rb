class ChangeTimeToString < ActiveRecord::Migration[6.0]
  def change
    change_column :events, :time, :string
  end
end
