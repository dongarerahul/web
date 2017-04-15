import Html.Events exposing (onClick)
import Html exposing (Html, button, div, text)

main : Program Never Model Msg
main =
  Html.beginnerProgram { model = model, view = view, update = update }

--model
type alias Model = Int
model: Model
model = 0

--update
type Msg = Increment | Decrement

update : Msg -> Model -> Model
update msg model =
  case msg of
    Increment -> model + 1
    Decrement -> model - 1

-- view
view : Model -> Html Msg
view model =
  div []
    [ button [onClick Decrement] [ text "-"],
      div [] [ text (toString model)],
      button [ onClick Increment ] [text "+"]]
