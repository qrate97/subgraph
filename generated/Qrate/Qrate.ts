// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Moderator extends ethereum.Event {
  get params(): Moderator__Params {
    return new Moderator__Params(this);
  }
}

export class Moderator__Params {
  _event: Moderator;

  constructor(event: Moderator) {
    this._event = event;
  }

  get moderatorAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get subject(): string {
    return this._event.parameters[1].value.toString();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class Question extends ethereum.Event {
  get params(): Question__Params {
    return new Question__Params(this);
  }
}

export class Question__Params {
  _event: Question;

  constructor(event: Question) {
    this._event = event;
  }

  get question(): QuestionQuestionStruct {
    return changetype<QuestionQuestionStruct>(
      this._event.parameters[0].value.toTuple()
    );
  }
}

export class QuestionQuestionStruct extends ethereum.Tuple {
  get id(): BigInt {
    return this[0].toBigInt();
  }

  get question_string(): string {
    return this[1].toString();
  }

  get subject(): string {
    return this[2].toString();
  }

  get topic(): string {
    return this[3].toString();
  }

  get subTopic(): string {
    return this[4].toString();
  }

  get upvotes(): BigInt {
    return this[5].toBigInt();
  }

  get downvotes(): BigInt {
    return this[6].toBigInt();
  }

  get applicant(): Address {
    return this[7].toAddress();
  }

  get status(): i32 {
    return this[8].toI32();
  }

  get incentives(): BigInt {
    return this[9].toBigInt();
  }
}

export class Qrate__getQuestionsResultValue0Struct extends ethereum.Tuple {
  get id(): BigInt {
    return this[0].toBigInt();
  }

  get question_string(): string {
    return this[1].toString();
  }

  get subject(): string {
    return this[2].toString();
  }

  get topic(): string {
    return this[3].toString();
  }

  get subTopic(): string {
    return this[4].toString();
  }

  get upvotes(): BigInt {
    return this[5].toBigInt();
  }

  get downvotes(): BigInt {
    return this[6].toBigInt();
  }

  get applicant(): Address {
    return this[7].toAddress();
  }

  get status(): i32 {
    return this[8].toI32();
  }

  get incentives(): BigInt {
    return this[9].toBigInt();
  }
}

export class Qrate__questionsResult {
  value0: BigInt;
  value1: string;
  value2: string;
  value3: string;
  value4: string;
  value5: BigInt;
  value6: BigInt;
  value7: Address;
  value8: i32;
  value9: BigInt;

  constructor(
    value0: BigInt,
    value1: string,
    value2: string,
    value3: string,
    value4: string,
    value5: BigInt,
    value6: BigInt,
    value7: Address,
    value8: i32,
    value9: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
    this.value8 = value8;
    this.value9 = value9;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    map.set("value2", ethereum.Value.fromString(this.value2));
    map.set("value3", ethereum.Value.fromString(this.value3));
    map.set("value4", ethereum.Value.fromString(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromUnsignedBigInt(this.value6));
    map.set("value7", ethereum.Value.fromAddress(this.value7));
    map.set(
      "value8",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value8))
    );
    map.set("value9", ethereum.Value.fromUnsignedBigInt(this.value9));
    return map;
  }

  getId(): BigInt {
    return this.value0;
  }

  getQuestion_string(): string {
    return this.value1;
  }

  getSubject(): string {
    return this.value2;
  }

  getTopic(): string {
    return this.value3;
  }

  getSubTopic(): string {
    return this.value4;
  }

  getUpvotes(): BigInt {
    return this.value5;
  }

  getDownvotes(): BigInt {
    return this.value6;
  }

  getApplicant(): Address {
    return this.value7;
  }

  getStatus(): i32 {
    return this.value8;
  }

  getIncentives(): BigInt {
    return this.value9;
  }
}

export class Qrate extends ethereum.SmartContract {
  static bind(address: Address): Qrate {
    return new Qrate("Qrate", address);
  }

  chairperson(): Address {
    let result = super.call("chairperson", "chairperson():(address)", []);

    return result[0].toAddress();
  }

  try_chairperson(): ethereum.CallResult<Address> {
    let result = super.tryCall("chairperson", "chairperson():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getQuestions(_subject: string): Array<Qrate__getQuestionsResultValue0Struct> {
    let result = super.call(
      "getQuestions",
      "getQuestions(string):((uint256,string,string,string,string,uint256,uint256,address,uint8,uint256)[])",
      [ethereum.Value.fromString(_subject)]
    );

    return result[0].toTupleArray<Qrate__getQuestionsResultValue0Struct>();
  }

  try_getQuestions(
    _subject: string
  ): ethereum.CallResult<Array<Qrate__getQuestionsResultValue0Struct>> {
    let result = super.tryCall(
      "getQuestions",
      "getQuestions(string):((uint256,string,string,string,string,uint256,uint256,address,uint8,uint256)[])",
      [ethereum.Value.fromString(_subject)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<Qrate__getQuestionsResultValue0Struct>()
    );
  }

  moderatorCount(param0: string): BigInt {
    let result = super.call(
      "moderatorCount",
      "moderatorCount(string):(uint256)",
      [ethereum.Value.fromString(param0)]
    );

    return result[0].toBigInt();
  }

  try_moderatorCount(param0: string): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "moderatorCount",
      "moderatorCount(string):(uint256)",
      [ethereum.Value.fromString(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  moderators(param0: string, param1: Address): boolean {
    let result = super.call("moderators", "moderators(string,address):(bool)", [
      ethereum.Value.fromString(param0),
      ethereum.Value.fromAddress(param1)
    ]);

    return result[0].toBoolean();
  }

  try_moderators(
    param0: string,
    param1: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "moderators",
      "moderators(string,address):(bool)",
      [ethereum.Value.fromString(param0), ethereum.Value.fromAddress(param1)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  questions(param0: string, param1: BigInt): Qrate__questionsResult {
    let result = super.call(
      "questions",
      "questions(string,uint256):(uint256,string,string,string,string,uint256,uint256,address,uint8,uint256)",
      [
        ethereum.Value.fromString(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return new Qrate__questionsResult(
      result[0].toBigInt(),
      result[1].toString(),
      result[2].toString(),
      result[3].toString(),
      result[4].toString(),
      result[5].toBigInt(),
      result[6].toBigInt(),
      result[7].toAddress(),
      result[8].toI32(),
      result[9].toBigInt()
    );
  }

  try_questions(
    param0: string,
    param1: BigInt
  ): ethereum.CallResult<Qrate__questionsResult> {
    let result = super.tryCall(
      "questions",
      "questions(string,uint256):(uint256,string,string,string,string,uint256,uint256,address,uint8,uint256)",
      [
        ethereum.Value.fromString(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Qrate__questionsResult(
        value[0].toBigInt(),
        value[1].toString(),
        value[2].toString(),
        value[3].toString(),
        value[4].toString(),
        value[5].toBigInt(),
        value[6].toBigInt(),
        value[7].toAddress(),
        value[8].toI32(),
        value[9].toBigInt()
      )
    );
  }

  questionVotes(param0: BigInt, param1: BigInt): Address {
    let result = super.call(
      "questionVotes",
      "questionVotes(uint256,uint256):(address)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return result[0].toAddress();
  }

  try_questionVotes(
    param0: BigInt,
    param1: BigInt
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "questionVotes",
      "questionVotes(uint256,uint256):(address)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  threshold(param0: string): BigInt {
    let result = super.call("threshold", "threshold(string):(uint256)", [
      ethereum.Value.fromString(param0)
    ]);

    return result[0].toBigInt();
  }

  try_threshold(param0: string): ethereum.CallResult<BigInt> {
    let result = super.tryCall("threshold", "threshold(string):(uint256)", [
      ethereum.Value.fromString(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class AddQuestionCall extends ethereum.Call {
  get inputs(): AddQuestionCall__Inputs {
    return new AddQuestionCall__Inputs(this);
  }

  get outputs(): AddQuestionCall__Outputs {
    return new AddQuestionCall__Outputs(this);
  }
}

export class AddQuestionCall__Inputs {
  _call: AddQuestionCall;

  constructor(call: AddQuestionCall) {
    this._call = call;
  }

  get _question_string(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _subject(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _topic(): string {
    return this._call.inputValues[2].value.toString();
  }

  get _subTopic(): string {
    return this._call.inputValues[3].value.toString();
  }
}

export class AddQuestionCall__Outputs {
  _call: AddQuestionCall;

  constructor(call: AddQuestionCall) {
    this._call = call;
  }
}

export class ApplyAsModeratorCall extends ethereum.Call {
  get inputs(): ApplyAsModeratorCall__Inputs {
    return new ApplyAsModeratorCall__Inputs(this);
  }

  get outputs(): ApplyAsModeratorCall__Outputs {
    return new ApplyAsModeratorCall__Outputs(this);
  }
}

export class ApplyAsModeratorCall__Inputs {
  _call: ApplyAsModeratorCall;

  constructor(call: ApplyAsModeratorCall) {
    this._call = call;
  }

  get _subject(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class ApplyAsModeratorCall__Outputs {
  _call: ApplyAsModeratorCall;

  constructor(call: ApplyAsModeratorCall) {
    this._call = call;
  }
}

export class ApproveModeratorCall extends ethereum.Call {
  get inputs(): ApproveModeratorCall__Inputs {
    return new ApproveModeratorCall__Inputs(this);
  }

  get outputs(): ApproveModeratorCall__Outputs {
    return new ApproveModeratorCall__Outputs(this);
  }
}

export class ApproveModeratorCall__Inputs {
  _call: ApproveModeratorCall;

  constructor(call: ApproveModeratorCall) {
    this._call = call;
  }

  get _address(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _subject(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class ApproveModeratorCall__Outputs {
  _call: ApproveModeratorCall;

  constructor(call: ApproveModeratorCall) {
    this._call = call;
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class DefaultCall extends ethereum.Call {
  get inputs(): DefaultCall__Inputs {
    return new DefaultCall__Inputs(this);
  }

  get outputs(): DefaultCall__Outputs {
    return new DefaultCall__Outputs(this);
  }
}

export class DefaultCall__Inputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class DefaultCall__Outputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class UpdateQuestionCall extends ethereum.Call {
  get inputs(): UpdateQuestionCall__Inputs {
    return new UpdateQuestionCall__Inputs(this);
  }

  get outputs(): UpdateQuestionCall__Outputs {
    return new UpdateQuestionCall__Outputs(this);
  }
}

export class UpdateQuestionCall__Inputs {
  _call: UpdateQuestionCall;

  constructor(call: UpdateQuestionCall) {
    this._call = call;
  }

  get _id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _subject(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _vote(): boolean {
    return this._call.inputValues[2].value.toBoolean();
  }
}

export class UpdateQuestionCall__Outputs {
  _call: UpdateQuestionCall;

  constructor(call: UpdateQuestionCall) {
    this._call = call;
  }
}
