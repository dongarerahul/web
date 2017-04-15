import Html exposing (..)
import Html.Events exposing (onClick)
import Random exposing (..)

main : Program Never Model Msg
main = Html.program {
  init          = init,
  view          = view,
  update        = update,
  subscriptions = subscriptions
  }

type alias Model = { dieFace : Int }
type Msg = Roll | NewFace Int

subscriptions : Model -> Sub Msg
subscriptions model = Sub.none

model : Model
model = Model 1

view : Model -> Html Msg
view model = div [] [
    h1 [] [text (toString model.dieFace)],
    button [onClick Roll] [text "Roll"]
  ]

update : Msg -> Model -> (Model, Cmd Msg)
update msg model = case msg of
  Roll -> (model, Random.generate NewFace (Random.int 1 6))
  NewFace face -> (Model face, Cmd.none)

init : (Model, Cmd Msg)
init = (Model 1, Cmd.none)
